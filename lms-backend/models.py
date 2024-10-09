from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)
    role = db.Column(db.String(50), nullable=False) 
    courses = db.relationship('Course', backref='instructor', lazy=True)

class Course(db.Model):
    __tablename__ = 'courses'
    id = db.Column(db.Integer, primary_key=True)
    instructor_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    title = db.Column(db.String(150), nullable=False)
    description = db.Column(db.String, nullable=True)
    enrollments = db.relationship('Enrollment', back_populates='course', lazy=True)
    modules = db.relationship('Module', back_populates='course', lazy=True)
    assignments = db.relationship('Assignment', back_populates='course', lazy=True)
    discussions = db.relationship('Discussion', back_populates='course', lazy=True)

class Enrollment(db.Model):
    __tablename__ = 'enrollments'
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)
    enrollment_date = db.Column(db.DateTime, default=db.func.current_timestamp())

class Module(db.Model):
    __tablename__ = 'modules'
    id = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    course = db.relationship('Course', back_populates='modules')
    lessons = db.relationship('Lesson', back_populates='module')

class Lesson(db.Model):
    __tablename__ = 'lessons'
    id = db.Column(db.Integer, primary_key=True)
    module_id = db.Column(db.Integer, db.ForeignKey('modules.id'))
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=True)
    module = db.relationship('Module', back_populates='lessons')

class Assignment(db.Model):
    __tablename__ = 'assignments'
    id = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    due_date = db.Column(db.DateTime, nullable=True)
    course = db.relationship('Course', back_populates='assignments')
    submissions = db.relationship('Submission', back_populates='assignment')

class Submission(db.Model):
    __tablename__ = 'submissions'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    assignment_id = db.Column(db.Integer, db.ForeignKey('assignments.id'))
    submission_date = db.Column(db.DateTime, default=db.func.current_timestamp())
    grade = db.Column(db.Float, nullable=True)
    content = db.Column(db.Text, nullable=True)
    user = db.relationship('User')
    assignment = db.relationship('Assignment', back_populates='submissions')

class Discussion(db.Model):
    __tablename__ = 'discussions'
    id = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=True)
    course = db.relationship('Course', back_populates='discussions')
    replies = db.relationship('Reply', back_populates='discussion')

class Reply(db.Model):
    __tablename__ = 'replies'
    id = db.Column(db.Integer, primary_key=True)
    discussion_id = db.Column(db.Integer, db.ForeignKey('discussions.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    content = db.Column(db.Text, nullable=False)
    discussion = db.relationship('Discussion', back_populates='replies')
    user = db.relationship('User')

class Notification(db.Model):
    __tablename__ = 'notifications'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    message = db.Column(db.String(255), nullable=False)
    timestamp = db.Column(db.DateTime, default=db.func.current_timestamp())
    user = db.relationship('User')
