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

# uncomment if you want to parse author-paper-relationships
count = 0
File.foreach('../data/ANN/paper_author_affiliations.txt').with_index do |line, line_num|
  begin
    if !line.empty?
      list_line = line.split(/\t/)
      if list_line[0] && !list_line[0].empty? && list_line[1] && !list_line[1].empty?
        selected_papers = papers_created.select { |paper| paper[:id].include? list_line[0]}
        selected_authors = authors_created.select { |author| author[:id].include? list_line[1]}
        if !selected_papers.empty? && !selected_authors.empty?
          first_paper = Paper.find(selected_papers[0][:uuid])
          first_author = Author.find(selected_authors[0][:uuid])
          first_author.papers  << first_paper
          puts "---"
        end
      end
    end
  rescue => ex
  end
  count += 1
  puts "processed paper-author-relationships: " + count.to_s
end
