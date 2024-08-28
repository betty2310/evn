/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/hB1GUEHTquE
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Link } from "react-router-dom"
import { SetStateAction, useEffect, useState } from "react"

export function QtLuong() {
  const [canbos, setCanbos] = useState([])
  const [maCanBo, setMaCanBo] = useState('')
  const [canbo, setCanBo] = useState({})
  const [ten, setTen] = useState("")
  const [luong, setLuong] = useState([])
  const [chucvu, setChucVu] = useState("")
  const [phongban, setPhongBan] = useState("")
  const [selectedUserId, setSelectedUserId] = useState('');

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/canbo/');
      const data = await response.json();
      console.log(data)
      const users = data.data.canbos
      console.log(users)

      // Assuming the API returns an array of user objects with an 'id' field
      const ids = users.map(user => user.maCB);
      setCanbos(ids);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleFetchCanBo = async () => {
    if (maCanBo) {
      try {
        const response = await fetch(`http://localhost:5000/canbo/${maCanBo}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCanBo(data);
        console.log(data);
        setPhongBan(data.data.tenPhongBan)
        setChucVu(data.data.chucVu)
        setTen(data.data.hoTen)
        setLuong(data.data.data)
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
  };

  const handleUserSelect = (value) => {
    setSelectedUserId(value);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100">
      <Card>
        <CardHeader>
          <CardTitle>Cập nhật quá trình lương</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="employee-id">Mã cán bộ</Label>
              <Input id="employee-id" placeholder="CB000" value={maCanBo} onBlur={handleFetchCanBo} onChange={(e: { target: { value: SetStateAction<string> } }) => setMaCanBo(e.target.value)} />
              <Select
                id="employee-id"
                placeholder="Select an employee"
                value={selectedUserId}
                onChange={handleUserSelect}
                onBlur={handleFetchCanBo}
                style={{ width: 200 }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Mã cán bộ" />
                </SelectTrigger>
                <SelectContent>
                  {canbos.map(id => (
                    <SelectItem key={id} value={id}>
                      {id}
                    </SelectItem>
                  ))}

                </SelectContent>
              </Select>


            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Phòng ban</Label>
              <Input id="phong-ban" placeholder="Phòng kế toán" value={phongban} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="full-name">Họ tên</Label>
              <Input id="full-name" placeholder="Trần Văn A" value={ten} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Chức vụ</Label>
              <Input id="position" placeholder="Chuyên viên" value={chucvu} />
            </div>
            <h3>Quá trình lương</h3>
            <div className="space-y-2">
              <Label htmlFor="effective-date">Ngày hiệu lực</Label>
              <Input id="effective-date" placeholder="01/09/2005" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="decision-number">Số QĐ</Label>
              <Input id="decision-number" placeholder="QĐ-0543" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="salary-coefficient">Hệ số lương</Label>
              <Input id="salary-coefficient" placeholder="1.78" type="number" />
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <Link to={'/'}><Button variant="default">Đóng</Button></Link>
            <Button variant="default">Thêm</Button>
            <Button variant="default">Sửa</Button>
            <Button variant="default">Xóa</Button>
          </div>
        </CardContent>
        <CardFooter>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">STT</TableHead>
                <TableHead>Ngày hiệu lực</TableHead>
                <TableHead>Số QĐ</TableHead>
                <TableHead>Hệ số lương</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {luong.map((item, index) => (
                <TableRow key={item.maQuaTrinh}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{new Date(item.ngayQD).toLocaleDateString('vi-VN')}</TableCell>
                  <TableCell>{item.soQD}</TableCell>
                  <TableCell>{item.heSoLuong.giaTri}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardFooter>
      </Card>
    </div >
  )
}
