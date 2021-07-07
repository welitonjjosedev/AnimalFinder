
require "test_helper"

class FoundsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @found = create(:found)
  end

  test "should get index" do
    get founds_url, as: :json
    assert_response :success
  end

  test "should create found" do
    assert_difference('Found.count') do
      post founds_url, params: { found: { age: @found.age, extra: @found.extra, name: @found.name, photo: @found.photo, status: @found.status } }, as: :json
    end

    assert_response 201
  end

  test "should show found" do
    get found_url(@found), as: :json
    assert_response :success
  end

  test "should update found" do
    patch found_url(@found), params: { found: { age: @found.age, extra: @found.extra, name: @found.name, photo: @found.photo, status: @found.status } }, as: :json
    assert_response 200
  end

  test "should destroy found" do
    assert_difference('Found.count', -1) do
      delete found_url(@found), as: :json
    end

    assert_response 204
  end
end
