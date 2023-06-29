import {Button} from './components/Button.tsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/Card.tsx'

function App() {
  return (
    <>
      <Card className="m-20">
        <CardHeader>
          <CardTitle>Basic Template</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline">Button</Button>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

    </>
  )
}

export default App
