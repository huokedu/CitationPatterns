papers_created = []
authors_created = []


# uncomment if you want to parse papers
count = 0
File.foreach('../data/ANN/paper_outcites.txt').with_index do |line, line_num|
  begin
    list_line = line.split(/\t/)
    papers_file_path = "../data/ANN/papers_text/" + list_line[0] + ".txt"
    if File.exist?(papers_file_path)
      id = File.readlines("../data/ANN/paper_ids.txt").select { |line| line =~ /^#{list_line[0]}/ }[0].split(/\t/)
      if File.exist?("../data/ANN/papers_text/" + list_line[0] + ".txt")
        paper = Paper.new(
          :title => id[1],
          :published => id[2],
          :full_text => File.read("../data/ANN/papers_text/" + list_line[0] + ".txt")
        )
        paper.save
        paper_to_array = { :id => list_line[0], :uuid => paper.uuid }
        papers_created.push paper_to_array
      else
      end
    else
    end
  rescue => ex
  end
  count += 1
  puts "processed papers: " + count.to_s
end

# uncomment if you want to parse authors
count = 0
File.foreach('../data/ANN/author_ids.txt').with_index do |line, line_num|
  begin
    list_line = line.split(/\t/)
    name = list_line[1]
    names = name.split(/,/)
    author = Author.new(
      :first_name => names[1].gsub("\n",''),
      :last_name => names[0].gsub("\n",'')
    )
    author.save
    author_to_array = { :id => list_line[0], :uuid => author.uuid }
    authors_created.push author_to_array
  rescue => ex
  end
  count += 1
  puts "processed authors: " + count.to_s
end
