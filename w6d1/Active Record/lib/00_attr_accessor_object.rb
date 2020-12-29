class AttrAccessorObject
  def self.my_attr_accessor(*names)
    names.each do |name|
      self.define_method(name) { instance_variable_get("@#{name}") }
      self.define_method("#{name}=") { |x| instance_variable_set("@#{name}", x)}
    end

  end
end
