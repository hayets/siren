Attribute VB_Name = "Module2"
Sub ColorCells()
    Dim ws As Worksheet
    Dim lastRow As Long
    Dim rng As Range
    Dim orangeCount As Integer
    Dim pinkCount As Integer
    
   
    orangeCount = 0
    pinkCount = 0
    
    
    Set ws = ActiveSheet
    
    
    lastRow = ws.Cells(ws.Rows.Count, "F").End(xlUp).Row
    
    
    For Each rng In ws.Range("F2:F" & lastRow)
        If InStr(1, rng.Value, "pre-own", vbTextCompare) > 0 Then
            
            If InStr(1, rng.Offset(0, 2).Value, "典藏", vbTextCompare) = 0 Then
                
                rng.Offset(0, 2).Interior.Color = RGB(255, 165, 0)
                orangeCount = orangeCount + 1
            End If
        Else
            
            If InStr(1, rng.Offset(0, 2).Value, "典藏", vbTextCompare) > 0 Then
                
                rng.Offset(0, 2).Interior.Color = RGB(255, 192, 203)
                pinkCount = pinkCount + 1
            End If
        End If
    Next rng
    
    
    MsgBox "Pre-owned without label, colored in orange: " & orangeCount & vbCrLf & _
           "Not pre-owned but with label, colored in pink: " & pinkCount
    
End Sub




