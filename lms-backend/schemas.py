from marshmallow import Schema, fields

class UserSchema(Schema):
    id = fields.Integer()
    username = fields.String(required=True)
    email = fields.String(required=True)
    password_hash = fields.String(load_only=True)  # Not to expose the password hash
    role = fields.String(required=True)

class CourseSchema(Schema):
    id = fields.Integer()
    instructor_id = fields.Integer()
    title = fields.String(required=True)
    description = fields.String()
    enrollments = fields.List(fields.Integer(), dump_only=True)  # List of student IDs enrolled
    modules = fields.List(fields.Integer(), dump_only=True)  # List of module IDs
    assignments = fields.List(fields.Integer(), dump_only=True)  # List of assignment IDs
    discussions = fields.List(fields.Integer(), dump_only=True)  # List of discussion IDs

class EnrollmentSchema(Schema):
    id = fields.Integer()
    student_id = fields.Integer(required=True)
    course_id = fields.Integer(required=True)
    enrollment_date = fields.DateTime(dump_only=True)  # Automatically set by the server

class ModuleSchema(Schema):
    id = fields.Integer()
    course_id = fields.Integer(required=True)
    title = fields.String(required=True)
    description = fields.String()
    lessons = fields.List(fields.Integer(), dump_only=True)  # List of lesson IDs

class LessonSchema(Schema):
    id = fields.Integer()
    module_id = fields.Integer(required=True)
    title = fields.String(required=True)
    content = fields.String()

class AssignmentSchema(Schema):
    id = fields.Integer()
    course_id = fields.Integer(required=True)
    title = fields.String(required=True)
    description = fields.String()
    due_date = fields.DateTime()

class SubmissionSchema(Schema):
    id = fields.Integer()
    user_id = fields.Integer(required=True)
    assignment_id = fields.Integer(required=True)
    submission_date = fields.DateTime(dump_only=True)  # Automatically set by the server
    grade = fields.Float()
    content = fields.String()

class DiscussionSchema(Schema):
    id = fields.Integer()
    course_id = fields.Integer(required=True)
    title = fields.String(required=True)
    content = fields.String()
    replies = fields.List(fields.Integer(), dump_only=True)  # List of reply IDs

class ReplySchema(Schema):
    id = fields.Integer()
    discussion_id = fields.Integer(required=True)
    user_id = fields.Integer(required=True)
    content = fields.String(required=True)

class NotificationSchema(Schema):
    id = fields.Integer()
    user_id = fields.Integer(required=True)
    message = fields.String(required=True)
    timestamp = fields.DateTime(dump_only=True)  # Automatically set by the server
