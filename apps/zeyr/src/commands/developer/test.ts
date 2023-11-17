import {
	Command,
	RegisterSubCommand,
} from "@kaname-png/plugin-subcommands-advanced";

@RegisterSubCommand("developer", (builder) =>
	builder.setName("test").setDescription("test purposes"),
)
export class UserCommand extends Command {
	public override async chatInputRun(
		interaction: Command.ChatInputInteraction<"cached">,
	) {
		return interaction.reply("uwu");
	}
}
