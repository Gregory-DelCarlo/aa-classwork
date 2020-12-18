class CreateEnrollments < ActiveRecord::Migration[5.1]
  def change
    create_table :enrollments do |t|
      t.integer :course_id
      t.integer :student_id

      t.timestamps
    end
  end

  # add_index :enrollments, :course_id, 
  add_index :enrollments, :student_id,
  add_index :enrollments, [:course_id, :student_id], unique:true
end

