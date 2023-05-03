require 'test_helper'

class Api::GreetingsControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get api_greetings_index_url
    assert_response :success
  end
end
