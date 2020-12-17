require 'sqlite3'
require 'singleton'
require_relative 'database_connection.rb'

class Reply
    def self.find_by_id(find_id)
        id = QuestionsDataBase.instance.execute(<<-SQL, find_id)
            SELECT
                replies.body, questions.title
            FROM
                replies
            JOIN
                questions ON  replies.question_id = questions.id
            WHERE
                replies.id = ?
        SQL
        return nil if id.empty?
        p id
        Reply.new(id[0])
    end

    attr_accessor :body, :title
    def initialize(returned_hash)
        @body = returned_hash['body']
        @title = returned_hash['title']
    end
end