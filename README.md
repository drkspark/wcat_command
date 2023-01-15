# WCAT Command 
`wcat` is a clone of the `cat` command that helps use manipulate text files on the CLI.

## Setting Up the CLI:
- Clone the Repository
- Type ` npm link ` in terminal

## To Change the Command wcat
- Goto <b>package.json</b> and change the <i>key</i> of the <b>bin</b> property.

## Commands:
- wcat : Displays the content of the Files on the Terminal. Some of the Options available are: 
    - -s : Converts big line breaks into single line breaks.
    - -n : Number's all the lines of the Text.
    - -b : Number's only the non-empty lines of the Text.

## Syntax:
- To print the Content of Files
    ```js
        wcat filePath1 filePath2 .... 
    ```

- To Remove Spaces
    ```js
    wcat -s filePath1 filePath2 ... 
    ```
- To number the lines of the Content
    ```js
    wcat -n filePath1 filePath2 ... 
    wcat -b filePath1 filePath2 ... 
    ```

## NOTE
- We can't use `-n` and `-b` together.
- Position of the Commands doesn't matter.
- `wcat` also works with the pre-defined `>` and `>>` operators.