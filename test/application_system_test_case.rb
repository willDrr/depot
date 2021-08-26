require "test_helper"

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  # answer taken from  https://medium.com/@john200Ok/running-rails-6-system-tests-using-chrome-headless-and-selenium-on-gitlab-ci-9b4de5cafcd0
  driven_by :selenium, using: :headless_chrome, screen_size: [1400, 1400] do |option|
    option.add_argument("no-sandbox")
  end
end
