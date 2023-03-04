Feature: Get weather description in the given city
    The algorithm gives the current tempetature and weather description in the given city

    Scenario: Get weather description in the given city
        Given the city name is "Warsaw"
        When the user requests the weather
        Then the weather description can be either "warm" or "cold"
        And the response contains the city name