from flask import Flask
from flask import render_template, g, jsonify, request
from flaskext.mysql import MySQL

app = Flask(__name__)
app.debug = True

# mysql config
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'anorthr2'
app.config['MYSQL_DATABASE_PASSWORD'] = 'q^jH9Wy8#'
app.config['MYSQL_DATABASE_DB'] = 'sketch'
app.config['MYSQL_DATABASE_HOST'] = 'fall2020-6160-anorthr2.c1e1ag88025o.us-east-2.rds.amazonaws.com'
mysql.init_app(app)

@app.before_request
def before():
    g.db = mysql.connect()

@app.after_request
def after(response):
    g.db.close()
    return response

@app.route('/api/<table>')
def main(table):
    cursor = g.db.cursor()
    if table == "1":
        #s = request.args['query_string']
        cursor.execute("Call GetStudentsBySubject('Finance')")
        title = ["Students"]
    elif table == "2":
        #s = request.args['query_string']
        cursor.execute("Call GetStudentsGradesBySubject('Finance')")
        title = ["StudentName", "AssignmentName", "AssignmentScore"]
    elif table == "3":
        cursor.execute("select * from fall_2020_TAs")
        title = ["TA", "Email", "CourseTitle"]
    elif table == "4":
        s = request.args['query_string']
        # use s to call procedure.
        print(s)
    else:
        raise NotImplementedError

    result = cursor.fetchall()
    result_new = []
    for i in result:
        result_new.append({k:v for k,v in zip(title, i)})
    return jsonify(result_new)




if __name__ == '__main__':
    app.run()