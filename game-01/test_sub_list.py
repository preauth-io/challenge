import unittest
from . import sub_list


class TestSubList(unittest.TestCase):

    def test_sub_list(self):
        list = sub_list.generate_sub_list([2,9,8,7], 11)
        print(list)
        self.assertIsNotNone(list)
        self.assertListEqual(list, [2, 9])

if __name__ == '__main__':
    unittest.main()