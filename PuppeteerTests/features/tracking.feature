Feature: Confirm tracking codes are triggered, cookies are set or updated

  Scenario: client-id-unifier is set the first time a customer visits one of our sites
    Given a customer is using a web browser which has never visited one of our sites before
    When the customer visits a site for the first time
    Then a unique tracking code is created in their cookie

  Scenario: client-id-unifier is persisted across all of our websites
    Given a customer has visited one of our sites before
    When they visit a different site
    Then their unique tracking code is present in their cookie
