Feature: Count array elements

    Scenario: Count array elements
        Given array is empty
        Then the length of array should be 0
        When the array is loaded with element 2,3,4
        Then the length of array should be 3