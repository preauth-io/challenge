"""Module contains the solution to the game-01 problem."""


class Solution:
    """Solution contains a function to find a pair of number that add up to a given value."""

    def find_pair_numbers_given_value(self, list_numbers, value):
        """Find a pair of numbers that add up to a given value.

        Args:
            list_numbers (list): not empty set of integer numbers.
            value (Integer): the value to find a pair of numbers that add up to.

        Returns:
            list: the first subset of 2 numbers of list_numbers which sum value.
        """
        for i in range(len(list_numbers)):
            for j in range(i + 1, len(list_numbers)):
                if list_numbers[i] + list_numbers[j] == value:
                    return [list_numbers[i], list_numbers[j]]
        return None
