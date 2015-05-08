class ReportsController < ApplicationController

  def show

    latest_report = Report.where(location: params[:location]).last

    if latest_report.nil? || !latest_report.is_current?
      scraped_data = fetch_report(params[:location])

      latest_report = Report.new(scraped_data[:details])
      if latest_report.save

        images = []

        scraped_data[:images].each do |url|
          new_image = Image.new({
            report_id: latest_report.id,
            location: url
          })

          if new_image.save
            images.push(new_image)
          end
        end
      end
    end

    render json: { report: latest_report, images: latest_report.images }
  end

  private

  def fetch_report(beach, country = 'australia', state = 'victoria')
    url = "http://www.swellnet.com/reports/#{country}/#{state}/#{beach}"
    page = Nokogiri::HTML(open(url))
    page_report = page.css("div.view-display-id-latest_report")
    page_images = page.css("div.field-name-field-surf-report-images")

    report = {
      location: beach.to_sym,

      report_time: page_report.css("span.views-field-field-surf-report-date")
        .css("span.date-display-single")
        .text,

      surf: page_report.css("span.views-field-nothing")
        .css("span.field-content")
        .text,

      winds: page_report.css("span.views-field-field-surf-report-wind")
        .css("span.field-content")
        .text,

      weather: page_report.css("span.views-field-field-surf-report-weather")
        .css("span.field-content")
        .text,

      rating: page_report.css("span.views-field-field-surf-report-rating")
        .css("span.field-content")
        .text,

      description: page_report.css("div.views-field-body")
        .css("div.field-content")
        .inner_html
        .html_safe,

      link: url
    }

    images = page_images.search("img").map { |img| img["src"] }

    {
      details: report,
      images: images
    }
  end
end
