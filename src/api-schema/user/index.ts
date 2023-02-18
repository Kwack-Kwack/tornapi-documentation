import { Section, Selection } from "@/api-schema/schema.types";
import AttacksSelection from "@/api-schema/user/attacks";
import ProfileSelection from "@/api-schema/user/profile";

const selections: Selection[] = [AttacksSelection, ProfileSelection];

const UserSection: Section = {
    selections,
    defaultSelection: "profile",
    idDescription: "Supports user ids and Discord user uuids for linked accounts.",
};

export default UserSection;
