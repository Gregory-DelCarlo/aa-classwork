class Enrollment < ApplicationRecord
    belongs_to :student,
        primary_key: :id,
        foreign_key: :student_id,
        class_name: :User
        
    belongs_to :course,
            primary_key: :id,
            foreign_key: :course_id,
            class_name: :Course
    
    # has_one :courses,
    #     primary_key: :id,
    #     foreign_key: :instructor_id,
    #     class_name: :Course

end
