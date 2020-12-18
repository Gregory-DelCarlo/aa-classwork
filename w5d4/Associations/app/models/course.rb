class Course < ApplicationRecord
    validates :name, presence: true

    has_many :enrollments,
        primary_key: :id,
        foreign_key: :course_id,
        class_name: :Enrollment

    has_many :enrolled_students,
        through: :enrollments,
        source: :student

    #pre requistes
    belongs_to :prereq,
        primary_key: :id,
        foreign_key: :prereq_id,
        class_name: :Course
    
    has_many :parent_courses,
        primary_key: :id,
        foreign_key: :prereq_id,
        class_name: :Course

    belongs_to :instructor,
        primary_key: :id,
        foreign_key: :instructor_id,
        class_name: :User

        
    # has_one :instructor,
    #     through: :enrollments
    #     source: :student, 
        
end
