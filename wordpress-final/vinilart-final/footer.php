<?php
/**
 * Rodape do site (mesmo HTML/CSS do site aprovado).
 *
 * @package vinilart
 */

$vinilart_contact = vinilart_contact();
?>
	</main>

	<footer class="surface-grain relative border-t border-border bg-ink">
		<div class="bar-brand h-[3px] w-full" aria-hidden="true"></div>

		<div class="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.9fr_1.1fr] lg:py-20">
			<div>
				<span class="inline-flex items-center text-2xl">
					<img src="<?php echo esc_url( vinilart_logo_url( 'footer' ) ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" class="h-[1.15em] w-auto object-contain" />
				</span>
				<p class="mt-4 max-w-[24ch] font-display text-xl font-extrabold uppercase leading-tight tracking-tight text-foreground/85"><?php echo esc_html( vinilart_opt( 'slogan', 'Saber fazer… como deve ser.' ) ); ?></p>
			</div>

			<nav class="flex flex-col gap-3">
				<span class="eyebrow"><?php echo esc_html( vinilart_opt( 'footer_nav', 'Navegação' ) ); ?></span>
				<?php vinilart_footer_menu(); ?>
			</nav>

			<div class="flex flex-col gap-3.5">
				<span class="eyebrow"><?php echo esc_html( vinilart_opt( 'footer_contactos', 'Contactos' ) ); ?></span>

				<div class="flex flex-col gap-2.5">
					<a href="<?php echo esc_url( $vinilart_contact['phone_url'] ); ?>" class="flex w-fit items-center gap-2.5 text-sm font-semibold text-foreground/90 transition-colors hover:text-cyan">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 text-cyan" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
						<span><?php echo esc_html( $vinilart_contact['phone'] ); ?></span>
					</a>

					<a href="<?php echo esc_url( 'mailto:' . $vinilart_contact['email'] ); ?>" class="flex w-fit items-center gap-2.5 text-sm text-foreground/80 transition-colors hover:text-cyan">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 text-cyan" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
						<span><?php echo esc_html( $vinilart_contact['email'] ); ?></span>
					</a>

					<a href="<?php echo esc_url( 'mailto:' . $vinilart_contact['email_support'] ); ?>" class="flex w-fit items-center gap-2.5 text-xs text-foreground/60 transition-colors hover:text-foreground">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5 shrink-0 text-foreground/40" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
						<span><?php echo esc_html( $vinilart_contact['email_support'] ); ?></span>
					</a>
				</div>

				<div class="border-t border-white/[0.06] pt-3">
					<address class="text-xs not-italic leading-relaxed text-foreground/65"><?php echo esc_html( $vinilart_contact['street'] ); ?><br /><?php echo esc_html( $vinilart_contact['zip'] ); ?></address>
				</div>

				<div class="flex flex-col gap-1.5 pt-1">
					<a href="<?php echo esc_url( $vinilart_contact['instagram_url'] ); ?>" target="_blank" rel="noreferrer" class="flex w-fit items-center gap-2 text-xs text-foreground/65 transition-colors hover:text-magenta">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
						<?php echo esc_html( $vinilart_contact['instagram'] ); ?>
					</a>
					<a href="<?php echo esc_url( $vinilart_contact['ig_sport_url'] ); ?>" target="_blank" rel="noreferrer" class="flex w-fit items-center gap-2 text-xs text-foreground/65 transition-colors hover:text-yellow">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
						VinilArt Sport — <?php echo esc_html( $vinilart_contact['ig_sport'] ); ?>
					</a>
				</div>
			</div>
		</div>

		<div class="border-t border-border px-5 py-6 sm:px-8">
			<p class="mx-auto max-w-[1400px] text-xs uppercase tracking-[0.16em] text-muted-foreground"><?php echo esc_html( vinilart_opt( 'copyright', '© ' . gmdate( 'Y' ) . ' VinilArt · Oeiras, Portugal' ) ); ?></p>
		</div>
	</footer>
</div>

<?php wp_footer(); ?>
</body>
</html>
