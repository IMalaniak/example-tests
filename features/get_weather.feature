Feature: Get weather description in the given city
    The algorithm gives the current tempetature and weather description in the given city

    Scenario: Get weather description in the given city using my browsers language
        Given the city name is "Warsaw"
        And the language set in browser is "Polish"
        When the user requests the weather
        Then the response contains the translated city name and it should be "Warszawa"
        And the weather description can be either " marznie" or " się ogrzewa"
        And the temperature is between -10 and 30
        And the icon is either "sun" or "cloud"