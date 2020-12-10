require_relative 'tic_tac_toe_node'

class SuperComputerPlayer < ComputerPlayer

  def initialize
    @name = "Super Tandy 9000"
  end
  def move(game, mark)
    ttt_n = TicTacToeNode.new(game.board, mark)
    ttt_n_children = ttt_n.children
    ttt_n_children.each { |move| return move.prev_move_pos if move.winning_node?(mark) }
    ttt_n_children.each { |move| return move.prev_move_pos if !move.losing_node?(mark) }
    raise "CHEATER!" 
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Play the brilliant computer!"
  hp = SuperComputerPlayer.new # HumanPlayer.new("Jeff")
  cp = ComputerPlayer.new # SuperComputerPlayer.new
  while true
    x = TicTacToe.new(cp, hp)
    x.run 
    x.show
    sleep(2)
  end
end
