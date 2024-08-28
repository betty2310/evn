import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className="flex h-[100dvh] items-center justify-center">
      <div className="flex flex-col gap-4">
        <Link to={`cap-nhat-luong`}><Button>Cập nhật quá trình lương</Button></Link>
        <Button>Báo cáo</Button>
        <Button>Thoát</Button>
      </div>
    </div>
  )
}

export default App
