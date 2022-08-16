from flask import Flask
from flask import render_template
from flask import request
from flask import redirect
from flask import jsonify
from flask import session
from flask import url_for
from flask import jsonify
from flask import send_file
import requests
import sys
import os
import json
import zipfile

from app import app
app.secret_key=("83c8b9f83866e186b748ac38166ee19eadd02eba744f751766bd891e3862d178")


@app.route("/")
def hello():
    return render_template("main.html")


@app.errorhandler(404)
def not_found(error):
    return render_template("not_found.html")


@app.errorhandler(500)
def server_error(error):
    return render_template("server_error.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/doStuff", methods=['POST'])
def doStuff():
    ext = request.form.get('extension')
    session['ext1'] = ext
    base_url = "https://clients2.google.com/service/update2/crx?response=redirect&prodversion=49.0&acceptformat=crx3&x=id%3D"
    end_bit = "%26installsource%3Dondemand%26uc"
    ext_id = ext
    ext_id.rstrip()
    filename = ext_id+".crx"
    concat = base_url+ext_id+end_bit

    if not os.path.exists(ext_id):
            ext_folder = "/tmp/EXT_FOLDER/"
            if not os.path.exists(ext_folder+ext_id):
                os.makedirs(ext_folder+ext_id)
            
            path = ext_folder+ext_id+"/"+filename
            session['path'] = path
            req = requests.get(concat, allow_redirects=True)
            open(path, 'wb').write(req.content)
            # Unzip the ting
            with open(path, 'rb') as fi:
                zf = zipfile.ZipFile(fi)
                zf.extractall(ext_folder+ext_id)

    return redirect("/")


@app.route("/getPerms")
def getPerms():
    ext = session['ext1']
    path = session['path']
    dir_path = os.path.dirname(path)
    manifest = "manifest.json"
    m_path = os.path.join(dir_path, manifest)
    with open(m_path) as f:
        return jsonify(f.read())


@app.route("/getName")
def getName():
    ext = session['ext1']
    path = session['path']
    dir_path = os.path.dirname(path)
    print(dir_path)
    manifest = "manifest.json"
    m_path = os.path.join(dir_path, manifest)
    with open(m_path) as json_file:
        data = json.load(json_file)
        if "name" in data:
            d = data['name'].replace("__MSG_","")
            d = d.replace("__","")
            return d
        elif "short_name" in data:
            d = data['short_name'].replace("__MSG_","")
            d = d.replace("__","")
            return d
        else:
            return {"name":"not found"}


@app.route("/download/", methods=['GET'])
def download():
    path = session['path']
    print(path)
    filename = os.path.basename(path)
    print("I MADE IT THIS FAR THEN DIED")
    return send_file(path, as_attachment=True, attachment_filename=filename)

