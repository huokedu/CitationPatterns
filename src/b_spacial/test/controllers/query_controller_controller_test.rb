require 'test_helper'

class QueryControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get query" do
    get query_controller_query_url
    assert_response :success
  end

end
