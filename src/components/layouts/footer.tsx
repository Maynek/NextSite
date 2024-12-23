//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import Copyright from "@/components/elements/copyright"
import Icons from "@/components/elements/icons"

export default function Footer() {
  return (
    <div className="flex flex-row">
      <div className="flex-1">
        <Copyright />
      </div>
      <div className="flex-1">
        <Icons />
      </div>
    </div>
  );
}