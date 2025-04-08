import { Initial } from "./pages/Initial";
import { SubjectRegister } from "./pages/forms/SubjectRegister";
import { TeacherLogin } from "./pages/forms/TeacherLogin";
import { EnviromentRegister } from "./pages/forms/EnviromentRegister";

export function App(){
  return (
    <div>
      {/* <TeacherLogin /> */}
      {/* <SubjectRegister /> */}
      <EnviromentRegister />
    </div>
  )
}