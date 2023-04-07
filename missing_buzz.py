
## Given a list of buzzwords in buzz.txt and a resume res.txt find
## all the buzzwords that your resume contains, and all that it is missing.
## example usage:  python buzz.txt res.txt
## buzz.txt is a new-line delimited list of buzzwords
## res.txt is your resume

import sys

# Check if both files are specified as command line arguments
if len(sys.argv) < 3:
    print("Please specify 2 command line arguments. example usage:  python buzz.txt res.txt ")
    sys.exit()

# Read buzzwords from file
buzzwords = []
with open(sys.argv[1], 'r') as f:
    for line in f:
        buzzwords.append(line.strip())

# Read resume body from argument
with open(sys.argv[2], 'r') as f:
    body = f.read()

missing_buzzwords = []
has_buzzwords = []
for word in buzzwords:
    if word not in body:
        missing_buzzwords.append(word)
    else:
        has_buzzwords.append(word)

def print_buzzwords(buzzwords):
    for word in buzzwords:
        print(word)

print (" ########### Has buzzwords: ########### ")
print_buzzwords(has_buzzwords)
print (" ########### Missing buzzwords: ###########")
print_buzzwords(missing_buzzwords)