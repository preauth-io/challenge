"""Module that contains tests for the solution."""

import unittest2
from solution import Solution


class TestSolution(unittest2.TestCase):
    """Class that contains tests for the solution."""

    def test_find_pair_numbers_given_value(self):
        """Test the solution."""
        solution = Solution()

        self.assertEqual(solution.find_pair_numbers_given_value(
            [2, 5, 8, 14, 0], 10), [2, 8])

        self.assertEqual(solution.find_pair_numbers_given_value(
            [5, 2, 5, 8, 1], 10), [5, 5])

        self.assertEqual(solution.find_pair_numbers_given_value(
            [5, 2, 5, 8, 1], 11), None)

        self.assertEqual(solution.find_pair_numbers_given_value(
            [2, 2, 8, 14, 0], 14), [14, 0])

        self.assertEqual(solution.find_pair_numbers_given_value(
            [2, 2, 4, 14, 0], 4), [2, 2])

        self.assertEqual(solution.find_pair_numbers_given_value(
            [2, 0, 4, 14, 0], 4), [0, 4])


def main():
    """Main function to test the solution."""
    unittest2.main()


if __name__ == '__main__':
    main()
