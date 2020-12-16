require 'sqlite3'

class QuestionsDataBase < SQLite3::Database
    include Singleton 
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
        Question.new(id.values)
    end
end

class Question
    def initialize
    end
end