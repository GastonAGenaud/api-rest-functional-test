@smoke
Feature: User Routes
  In order manage directory
  As a QA Automation
  I want to make sure CRUD operations through REST API works fine

  Scenario Outline: list users
    Given A page <page>
    When I send GET request to /users?page=
    Then I get response code 200

    Examples:
      |   page |
      |    1   |
      |    2   |

  Scenario Outline: create user
    Given A body <request>
    When I send POST request to /users
    Then I get response code 201

    Examples:
      | request                                 |
      | { "name": "morpheus", "job": "leader" } |


 