# Wcat
It is used to display or make a copy of one or more files in terminal.

## Commands
- [x] wcat filepath => Display the content of File.
- [x] wcat filepath1 filepath2 filepath3... => Display all the files content on the terminal.
- [x] wcat -s filepath => Convert big line breaks into a singular break
- [x] wcat -n filepath => Give numbering to all lines
- [x] wcat -b filepath => Give numbering to non-empty lines


## Edge Cases
- [x] If file entered is not found then it gives File doesn't exist error
- [x]-n -b should not be executed together