from flask import Flask, request, render_template

app = Flask(__name__)

FLAG = "CTF{server_side_auth_is_secure}"

@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        user = request.form.get("username")
        pw = request.form.get("password")

        if user == "admin" and pw == "sawit123":
            return f"<h1>{FLAG}</h1>"
        else:
            return "<h3>Invalid credentials</h3>"

    return render_template("index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
