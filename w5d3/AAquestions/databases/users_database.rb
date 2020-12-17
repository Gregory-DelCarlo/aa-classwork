require 'sqlite3'
require 'singleton'
require_relative 'database_connection.rb'

class Users
    def self.find_by_id(find_id)
        id = QuestionsDataBase.instance.execute(<<-SQL, find_id)
            SELECT
                fname, lname, questions.title
            FROM
                users
            JOIN
                questions_follows ON users.id = questions_follows.user_id
            JOIN
                questions ON  questions_follows.question_id = questions.id
            WHERE
                users.id = ?
        SQL
        return nil if id.empty?
        p id
        Users.new(id[0])
    end

    attr_accessor :fname, :lname, :title
    def initialize(returned_hash)
        @fname = returned_hash['fname']
        @lname = returned_hash['lname']
        @title = returned_hash['title']
    end
end