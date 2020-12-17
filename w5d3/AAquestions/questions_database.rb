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

class Question
    def self.find_by_id(find_id)
        id = QuestionsDataBase.instance.execute(<<-SQL, find_id)
            SELECT
                title, body, author.fname
            FROM
                questions
            JOIN
                users AS author ON questions.author_id = author.id 
            WHERE
                questions.id = ?
        SQL
        return nil if id.empty?
        p id
        Question.new(id[0])
    end

    attr_accessor :title, :body, :author
    def initialize(returned_hash)
        @title = returned_hash['title']
        @body = returned_hash['body']
        @author = returned_hash['fname']
    end
end