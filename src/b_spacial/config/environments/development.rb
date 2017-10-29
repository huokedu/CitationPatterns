Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Do not eager load code on boot.
  config.eager_load = false

  # Show full error reports.
  config.consider_all_requests_local = true

  # Enable/disable caching. By default caching is disabled.
  if Rails.root.join('tmp/caching-dev.txt').exist?
    config.action_controller.perform_caching = true

    config.cache_store = :memory_store
    config.public_file_server.headers = {
      'Cache-Control' => "public, max-age=#{2.days.seconds.to_i}"
    }
  else
    config.action_controller.perform_caching = false

    config.cache_store = :null_store
  end

  # Don't care if the mailer can't send.
  config.action_mailer.raise_delivery_errors = false

  config.action_mailer.perform_caching = false

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Debug mode disables concatenation and preprocessing of assets.
  # This option may cause significant delays in view rendering with a large
  # number of complex assets.
  config.assets.debug = true

  # Suppress logger output for asset requests.
  config.assets.quiet = true

  # Raises error for missing translations
  # config.action_view.raise_on_missing_translations = true

  # Use an evented file watcher to asynchronously detect changes in source code,
  # routes, locales, etc. This feature depends on the listen gem.
  config.file_watcher = ActiveSupport::EventedFileUpdateChecker
  config.neo4j.session.type = :bolt
  config.neo4j.session.url = 'bolt://dev:Ldr3zheqX2zJNcjcwWct8g3PJyXGA8mQPveSGEFec9VHCTP7zJRaj8MvH7AvpAYJfaEFMU3eP3WkpCRQAQ7aZsWhvTYKaxxRdvU4UQyuzHwGHGMyDBtAMCGf52R5z8QjvAfBWq99tqNxNHQEzhf8tfETBfEPGc2L35FsyZszhhhGSTAkKDUzrGmTF5WPVtVm9Nswm7acxd2u5eaXpWhJpLuBGqrTWDQTBbPbVpzgEKVGsmw33f82FYmhUCEPzQf4uTySR3Mt77BjJhyjQMFMC3mYdcnhDAqY8rBqMttYmap4UzEyzWQNtGJbhaAJpnknZMZwsYAEq5w8L6eb424uXNxwtjrxnRbQ2MRK3UHRCxdeHu8XR3YvEvv7UrKpWM6BeY8hPzH9jqffb35635cFzycejWbvzKmhxTQHyQ8yMwTz7mdAAtSYFKKkHkYatcbYdMqM72UD2qZrrdHqYhqRPAAZ63jSeXybZm7zKwNkGkCsQSbMW6JEpCnmnAW84qwD@neo4j.slashdelta.com:7687'
end
