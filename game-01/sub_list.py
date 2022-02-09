
def generate_sub_list(list, num):
    for first_index, value in enumerate(list):
        for second_index in range (first_index+1, len(list)): 
            sum = list[first_index] + list[second_index]
            if sum == num:
                return [list[first_index], list[second_index]]
                break
    return []