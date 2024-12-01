import { SkillCardProps } from "@/interfaces";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

export default function SkillCard(props: SkillCardProps) {
  return (
    <Card className="w-[500px] h-[200px]">
      <CardHeader className="justify-center text-lg font-medium font-serif">
        {props.title}
      </CardHeader>
      <CardBody className="grid grid-cols-2 gap-2">
        {props.skills.map((x, idx) => (
          <x.chip rating={x.rating} key={idx} />
        ))}
      </CardBody>
    </Card>
  );
}
