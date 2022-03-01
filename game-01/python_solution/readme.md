# Game 01 - Python Solution

This is a python solution to the [Preauth](https://preauth.notion.site/Preauth-is-hiring-6337f811353c4da8b33e49e5efdbd10b) [challenge](https://github.com/preauth-io/challenge/tree/main/game-01).

## Requirements

- Languages: <img alt="Python 3" src="https://img.shields.io/badge/python-3-green">

- Libraries: <img alt="unittest2" src="https://img.shields.io/badge/unittest2-1.1.0-green">

## Usage

1. Clone the Repository:

    > git clone <https://github.com/KorKux1/challenge.git>

2. Go to solution path:

    > challenge/game-01/python_solution

3. The ``solution.py`` file has Solution class with ``find_pair_numbers_given_value`` function that you can use in the project you require.

    For example:

    ```python
    from solution import Solution

    solution = Solution()

    solution.find_pair_numbers_given_value([2, 5, 8, 14, 0], 10)

    # Output: [2, 8]
    ```

## Run Tests

Some test cases were made to validate the solution to the challenge. To run them follow these steps:

1. Go to the solution path:

    > cd challenge/game-01/python_solution

2. Install the requirements:

    > pip install -r requirements.txt

3. Run the tests:

    >  python3 -m unittest discover -p '*_test.py'

    or

    > python3 solution_test.py
