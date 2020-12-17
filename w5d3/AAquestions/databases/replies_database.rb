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
        Reply.new(id[0])
    end

    def self.find_by_user_id(user_id)
        id = QuestionsDataBase.instance.new(<<-SQL, user_id)
            SELECT
                replies.body, questions.title
            FROM
                replies
            JOIN
                questions ON replies.question_id = questions.id
            WHERE
                replies.user_id = ?
        SQL
        return nil if id.empty?
        Reply.new(id[0])
    end

    attr_accessor :body, :title
    def initialize(returned_hash)
        @body = returned_hash['body']
        @title = returned_hash['title']
    end
end