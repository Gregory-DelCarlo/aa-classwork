require 'sqlite3'

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
        id = execute(<<-SQL)
            SELECT
                title, body, author.fname
            FROM
                questions
            JOIN
                users ON questions.author_id = users.id AS author
            WHERE
                id = find_id
        SQL
        Question.new(*id.values)
    end

    attr_accessors :title, :body, :author
    def initialize(title, body, author)
        @title = title
        @body = body
        @author = author
    end
end