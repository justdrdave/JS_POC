Feature:
  Customers are presented with GDPR options on first visit to a site

  @construction
  Scenario: New customer is presented with the GDPR policy
    Given a customer is using a web browser which has never visited one of our sites before
    When the customer visits a site for the first time
    Then the cookie notice is displayed

  Scenario: Customer chooses to accept the GDPR policy
    Given a customer is using a web browser which has never visited one of our sites before
    And the customer visits a site for the first time
    When the customer accepts the cookie policy
    Then the cookie notice is no longer displayed


  Scenario: Customer chooses to manage cookies
    Given a customer is using a web browser which has never visited one of our sites before
    And the customer visits a site for the first time
    When they choose to manage cookies
    Then they are given a choice of which cookies to accept

  Scenario: Customer chooses to which cookies
    Given a customer is using a web browser which has never visited one of our sites before
    And the customer visits a site for the first time
    And they choose to manage cookies
    When they choose which cookies to accept
    Then the cookie notice is no longer displayed