Attribute VB_Name = "Module1"
Sub ModifyColumnJ()
    Dim ws As Worksheet
    Dim cell As Range
    Dim lastRow As Long
    Dim replaceCount As Long
    
    Set ws = ActiveSheet
    
    replaceCount = 0
    
    lastRow = ws.Cells(ws.Rows.Count, "J").End(xlUp).Row
    
    For Each cell In ws.Range("J1:J" & lastRow)
        Dim currentValue As String
        currentValue = cell.Value
        
        
        currentValue = Replace(currentValue, "^^", "^")
        currentValue = Replace(currentValue, "^ ", "^")
         currentValue = Replace(currentValue, "^", "^ ")
        currentValue = Replace(currentValue, "^  ", "^ ")
        
        
        If cell.Value <> currentValue Then
            cell.Value = currentValue
            replaceCount = replaceCount + 1
        End If
    Next cell
    
    MsgBox "Done. " & replaceCount & " lines have been updated.", vbInformation
End Sub

