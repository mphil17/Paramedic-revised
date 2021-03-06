import os
import datetime
from datetime import timedelta
from flask import (Flask, render_template, url_for, redirect, request,
flash, session)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/")
def index():
    dates = mongo.db.feelings.find(
         {"user": session["user"], "date": str(datetime.date.today())})
    today = ""
    for y in dates:
        today = y.get("date")
    user_feelings = mongo.db.feelings.find({"user": session["user"]})
    f = 0
    # Subtract
    for x in user_feelings:
        add_date = x.get("date_for_add")
        calc = add_date + datetime.timedelta(7)
        # if calc +  >= datetime.datetime.today():
        #     f += x.get("number")
    print(add_date)
    return render_template("index.html", today=today)


@app.route("/signup", methods=["GET", "POST"])
def signUp():
    if request.method == "POST":
        existing_user = mongo.db.pusers.find_one(
             {"username": request.form.get("username").lower()})
        existing_user_email = mongo.db.pusers.find_one(
             {"email": request.form.get("username").lower()})

        if existing_user:
            flash("Username already exists")
            redirect(url_for("signUp"))

        if existing_user_email:
            flash("Email already exists")
            redirect(url_for("signUp"))

        signup = {
            "username": request.form.get("username").lower(),
            "email": request.form.get("email").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.pusers.insert_one(signup)

        session["user"] = request.form.get("username").lower()
        flash("Successfully Signed Up")
        return redirect(url_for('profile', username=session["user"]))
    return render_template("signup.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # check if username exists
        existing_user = mongo.db.pusers.find_one(
            {"username": request.form.get("username").lower()})
        # check password matches correctly
        if existing_user:
            if check_password_hash(
                existing_user["password"], request.form.get("password")):
                session["user"] = request.form.get("username").lower()
                return redirect(url_for(
                        'profile', username=session["user"]))

            else:
                # invalid password
                flash("incorrect username and/ or password")
                return redirect(url_for('login'))
        else:
            # username does not exist
            flash("incorrect username and/ or password")
            return redirect(url_for('login'))
    return render_template('login.html')


@app.route("/profile/<username>", methods=["GET", "POST"])
def profile(username):
    # get user's username from database
    username = session["user"]
    feelingsdb = mongo.db.feelings.find({"user": session["user"]})
    today = datetime.datetime.today()
    if session["user"]:
        return render_template('profile.html', 
        username=username, feelingsdb=feelingsdb, today=today)


@app.route("/logout")
def logout():
    session.pop("user")
    return redirect(url_for('login'))


@app.route("/happier", methods=["GET", "POST"])
def happier():
    happier = {
        "user": session["user"],
        "feelings": "happier",
        "date": str(datetime.date.today()),
        "date_for_add": datetime.datetime.today(),
        "number": 1
    }
    mongo.db.feelings.insert_one(happier)
    return redirect(url_for('message'))


@app.route("/happy", methods=["GET", "POST"])
def happy():
    if request.method == "POST":
        happy = {
            "user": session["user"],
            "feelings": "happy",
            "date": str(datetime.date.today()),
            "date_for_add": datetime.datetime.today(),
            "number": 2
        }
        mongo.db.feelings.insert_one(happy)
        return redirect(url_for('message'))


@app.route("/meh", methods=["GET", "POST"])
def meh():
    meh = {
        "user": session["user"],
        "feelings": "meh",
        "date": str(datetime.date.today()),
        "date_for_add": datetime.datetime.today(),
        "number": 3
    }
    mongo.db.feelings.insert_one(meh)
    return redirect(url_for('message'))


@app.route("/sad", methods=["GET", "POST"])
def sad():
    sad = {
        "user": session["user"],
        "feelings": "sad",
        "date": str(datetime.date.today()),
        "date_for_add": datetime.datetime.today(),
        "number": 4
    }
    mongo.db.feelings.insert_one(sad)
    return redirect(url_for('message'))


@app.route("/sadder", methods=["GET", "POST"])
def sadder():
    sadder = {
        "user": session["user"],
        "feelings": "sadder",
        "date": str(datetime.date.today()),
        "date_for_add": datetime.datetime.today(),
        "number": 5
    }
    mongo.db.feelings.insert_one(sadder)
    return redirect(url_for('message'))


@app.route("/message")
def message():
    return render_template("message.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
