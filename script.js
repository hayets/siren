document.addEventListener('DOMContentLoaded', () => {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const inputArea = document.getElementById('inputArea')
    
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const video3 = document.getElementById('video3');
    const resultarea = document.getElementById('result')

    
    const doneButton = document.getElementById('doneButton');
    const copyButton = document.getElementById('copyButton');
    const resetButton = document.getElementById('resetButton');
    const inputValues = document.getElementById('inputValues');
    const defaultMessage = document.getElementById('defaultMessage');
    const convertBtn = document.getElementById('convert');



    function showVideo(video) {
        video1.style.display = 'none';
        video2.style.display = 'none';
        video3.style.display = 'none';
        video.style.display = 'flex';
        displayInputs.style.display = 'none';
        defaultMessage.style.display = 'none';
    }



    function displayInputValues() {
        const value1 = input1.value;
        const value2 = input2.value;
        const value3 = input3.value;

        inputValues.innerHTML = `
            <p>Sub ScoutSheet()<br>
            Dim Cell As Range<br>
            Dim Found As Boolean<br>
            Dim SourceFolder As String<br>
            Dim Keyword As String<br>
            Dim DestWorkbook As Workbook<br>
            Dim DestSheet As Worksheet<br>
            Dim DestRow As Long<br>
            Dim Filename As String<br>
            Dim wbSource As Workbook<br>
            Dim wsSource As Worksheet<br>
            Dim LastRow As Long<br>
            Dim LastColumn As Long<br>
            Dim i As Long<br>
            Dim j As Long<br>
            SourceFolder ="${value1}"<br>
            Keyword = "${value2}"<br>
            Found = False<br>
            Set DestWorkbook = Workbooks.Add<br>
            Set DestSheet = DestWorkbook.ActiveSheet<br>
            DestRow = 1<br>
            Filename = Dir(SourceFolder & "*.xlsx")<br>
            Do While Filename <> ""<br>

            Set wbSource = Workbooks.Open(SourceFolder & Filename)<br>
            Set wsSource = wbSource.ActiveSheet<br>
            LastRow = wsSource.Cells(wsSource.Rows.Count, "A").End(xlUp).Row<br>
            LastColumn = wsSource.Cells(1, wsSource.Columns.Count).End(xlToLeft).Column<br>
            For i = 1 To LastRow<br>
            For j = 1 To LastColumn<br>
            If InStr(1, wsSource.Cells(i, j).Value, Keyword, vbTextCompare) > 0 Then<br>
            wsSource.Rows(i).Copy DestSheet.Rows(DestRow)<br>
            DestRow = DestRow + 1<br>
            Found = True<br>
            Exit For<br>
            End If<br>
            Next j<br>
            Next i<br>
            wbSource.Close False<br>
            Filename = Dir<br>
            Loop<br>
            DestWorkbook.SaveAs "${value3}"<br>
            DestWorkbook.Close False<br>
            If Found Then<br>
            MsgBox "Rows containing '" & Keyword & "' have been combined into a new Excel file."<br>
            Else<br>
            MsgBox "No rows containing '" & Keyword & "' found in the Excel projects."<br>
            End If<br>
            End Sub</p><br>
        `;

        displayInputs.style.display = 'block';  
        video1.style.display = 'none';
        video2.style.display = 'none';
        video3.style.display = 'none';  
        defaultMessage.style.display = 'none'; 
        inputValues.style.display ='none';
    }
    




    function copyToClipboard() {
        const tempInput = document.createElement('textarea');
        tempInput.value = inputValues.innerText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Copied to clipboard!');
    }

    function resetPage() {
        input1.value = '';
        input2.value = '';
        input3.value = '';
        displayInputs.style.display = 'none';
        video1.style.display = 'none';
        video2.style.display = 'none';
        video3.style.display = 'none';
        defaultMessage.style.display = 'flex';  
    }

    input1.addEventListener('focus', () => showVideo(video1));
    input2.addEventListener('focus', () => showVideo(video2));
    input3.addEventListener('focus', () => showVideo(video3));


    doneButton.addEventListener('click', displayInputValues);
    copyButton.addEventListener('click', copyToClipboard);
    resetButton.addEventListener('click', resetPage);
});




document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
        const randomTime = Math.random() * 5 + 3; 

        if (circle.classList.contains('top-left')) {
            circle.style.animation = `moveTopLeft ${randomTime}s ease-in-out infinite`;
        } else if (circle.classList.contains('top-right')) {
            circle.style.animation = `moveTopRight ${randomTime}s ease-in-out infinite`;
        } else if (circle.classList.contains('bottom-left')) {
            circle.style.animation = `moveBottomLeft ${randomTime}s ease-in-out infinite`;
        } else if (circle.classList.contains('bottom-right')) {
            circle.style.animation = `moveBottomRight ${randomTime}s ease-in-out infinite`;
        }
    });
});