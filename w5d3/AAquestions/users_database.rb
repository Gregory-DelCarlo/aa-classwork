require 'sqlite3'
require 'singleton'

class QuestionsDataBase < SQLite3::Database
    include Singleton

    def initialize
        super('questions.db')
        self.type_translation = true
        self.results_as_hash = true
    end
end

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